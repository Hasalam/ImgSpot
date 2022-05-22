using ImgSpotBack.Data;
using ImgSpotBack.Entities;
using ImgSpotBack.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace ImgSpotBack.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public ImageController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet("GetImages")]
        public IEnumerable<Image> GetImages(string tags) {
            IEnumerable<Image> images = _db.Image.Where(b => b.Tags.Contains(tags));
            return images;
        }

        [HttpPut("AddFavourite")]
        public ActionResult<Image> AddFavourite(UserFavourite user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            IEnumerable<User> users = _db.Users.Where(u => u.email == user.email);
            IEnumerable<Image> images = _db.Image.Where(i => i.Url == user.url);

            if (users.Any() && images.Any() && !users.First().Favourites.Contains(images.First()))
            {
                users.First().Favourites.Add(images.First());
                _db.Update(users.First());
                try {
                    _db.SaveChanges();
                } catch 
                {
                    return BadRequest();
                }                
                return images.First(); 
            }
            return BadRequest();
        }

        [HttpDelete("DeleteFavourite")]
        public ActionResult<IEnumerable<FavouriteImages>> DeleteFavourite(UserFavourite user) {
            if (user == null)
            {
                return BadRequest();
            }
            IEnumerable<User> users = _db.Users.Where(u => u.email == user.email);
            IEnumerable<Image> images = _db.Image.Where(i => i.Url == user.url);

            User usr=_db.Users.Include(x => x.Favourites).SingleOrDefault(m => m.email == user.email);
            Image img=images.First();
            if (usr!=null && images.Any() && users.First().Favourites.Contains(images.First()))
            {
                usr.Favourites.Remove(images.First());
                _db.Update(users.First());
                try
                {
                    _db.SaveChanges();
                }
                catch
                {
                    return BadRequest();
                }
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("EditTags")]
        public ActionResult EditTags(EditImage Image) {
            if (Image == null)
            {
                return BadRequest();
            }
            Image img = _db.Image.Where(x => x.Url == Image.Url).FirstOrDefault();
            if (img == null)
            {
                return BadRequest();
            }
            img.Tags=Image.Tags;
            _db.Update(img);
            _db.SaveChanges();
            return Ok();
        }

        [HttpDelete("DeleteImage")]

        public ActionResult DeleteImage(ImageDelete image)
        {
            if (image == null)
            {
                return BadRequest();
            }
            try
            {
                Image dbimage = _db.Image.Where(x => x.Url == image.Url).First();
                if (dbimage != null)
                {
                    _db.Image.Remove(dbimage);
                    _db.SaveChanges();
                    return Ok();
                }
            }
            catch { 
                return BadRequest();
            }
            
           
            return BadRequest();
        }

        [HttpGet("GetFavourites")]
        public IEnumerable<FavouriteImages> GetFavourites(string login) {
            User user = _db.Users.Include(x=>x.Favourites).SingleOrDefault(m=>m.email==login);
            IEnumerable<Image> Images=_db.Image.Include(x=>x.Users).Where(x=>x.Users.Contains(user));
            List<FavouriteImages> result=new List<FavouriteImages>();
            foreach (Image img in Images)
            { 
                FavouriteImages favouriteImages = new FavouriteImages();
                favouriteImages.Url = img.Url;
                favouriteImages.Tags = img.Tags;
                result.Add(favouriteImages);
            }
            return result;
        
        }


        [HttpPost("Register")]
        public ActionResult<User> Register(UserLogin user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            IEnumerable<User> users = _db.Users.Where(u => u.email == user.email);
            if (!users.Any())
            {
                User newUser=new User();
                newUser.isAdmin = false;
                newUser.email = user.email;
                newUser.password = user.password;
                _db.Users.Add(newUser);
                _db.SaveChanges();
                return newUser;

            }
            return BadRequest();
        }

        [HttpPost("Login")]
        public ActionResult<User> Login(UserLogin user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            IEnumerable<User> users = _db.Users.Where(u => u.email == user.email && u.password == user.password);
            if (users.Any())
            {
                User bduser = users.First();
                if (bduser == null)
                {
                    return NotFound();
                }
                return bduser;
            }

            return NotFound();
        }

        [HttpPost("AddImage")]
        public ActionResult<Image> AddImage(Image img) {
            if (img == null)
            {
                return BadRequest();
            }
            _db.Image.Add(img);
            _db.SaveChanges();
            return img;
        }
    }
}

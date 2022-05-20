using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ImgSpotBack.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string email { get; set; }

        public string password { get; set; }

        public bool isAdmin { get; set; }
        public IList<Image> Favourites{ get; set; }=new List<Image>();
    }
}

using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ImgSpotBack.Model
{
    public class Image
    {
        [Key]
        public int Id { get; set; }
        public string Url { get; set; }
        public string Tags { get; set; }

        public IList<User> Users { get; set; }=new List<User>();
    }
}

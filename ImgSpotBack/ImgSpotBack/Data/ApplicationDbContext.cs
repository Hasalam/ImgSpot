using ImgSpotBack.Model;
using Microsoft.EntityFrameworkCore;

namespace ImgSpotBack.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Image> Image { get; set; }

        public DbSet<User> Users { get; set; }
    }
}

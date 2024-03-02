using Microsoft.EntityFrameworkCore;

namespace bookstore_backend.Models
{
    public class BookDBContext: DbContext
    {
        public BookDBContext(DbContextOptions options): base(options) { }
        public DbSet<Book> Books { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
    }
}

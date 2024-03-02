using System.ComponentModel.DataAnnotations;

namespace bookstore_backend.Models
{
    public class Purchase
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        public DateTime PurchaseDate { get; set; }
    }
}

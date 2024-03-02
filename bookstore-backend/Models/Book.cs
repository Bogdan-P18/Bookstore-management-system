using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace bookstore_backend.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName="nvarchar(50)")]
        public string Name { get; set; }

        public float Price { get; set; }
        public int Quantity { get; set; }
        public ICollection<Purchase> Purchases { get; set; }
    }
}

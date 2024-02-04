using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    [Table("Photos")]
    public class Photo
{
    public int id { get; set; }
    public string Url { get; set; }
    public bool Ismain { get; set; }
    public string publicId { get; set; }

    public int AppUserId { get; set; }
    public AppUser AppUser { get; set; }
    
}
}
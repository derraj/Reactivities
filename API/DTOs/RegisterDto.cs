using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,30}$", ErrorMessage = 
            "Password must be between 4-30 characters and include atleast one number, uppercase letter, lowercase letter, and special character"
        )]
        public string Password { get; set; }

        [Required]
        public string Username { get; set; }
    }
}
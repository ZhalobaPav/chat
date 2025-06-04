using Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ChatDbContext: IdentityDbContext<ChatUser>
    {
        public ChatDbContext(DbContextOptions<ChatDbContext> options): base(options)
        {
            
        }
    }
}

using System.Text.Json;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Data.Seed;

public static class SeedUsers
{
    public static async Task SeedUsersAsync(IServiceProvider services)
    {
        var userManager = services.GetRequiredService<UserManager<IdentityUser>>();

        var json = await File.ReadAllTextAsync("users.json");
        var users = JsonSerializer.Deserialize<List<IdentityUser>>(json);

        foreach (var user in users!)
        {
            var existing = await userManager.FindByNameAsync(user.UserName!);
            if (existing == null)
            {
                    await userManager.CreateAsync(user, "Password123!");
            }
        }
    }
}
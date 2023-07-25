
//Temporary class
namespace Artify.Models.Users
{
    public class UserConstants
    {
        public static List<UserModel> Users = new List<UserModel>() {
            new UserModel() { Email="admin@gmail.com", Password = "password", UserName="admin", Role="admin"},
            new UserModel() { Email="user@gmail.com", Password = "password1", UserName="user", Role="user"}
        };
    }
}



namespace WebView.Models
{
    public class User
    {
        public string Name { get; set; }
        public int UnitNumber { get; set; }
        public UnitType UnitType { get; set; }
        public string Council { get; set;}
    }

    public enum UnitType
    {
        Pack,
        Troop
    }
}
public class LeaveTrace : IPhrase
{
    public string Phrase {get; set;} = "Know before you go,Choose the right path,Trash your trash,Leave what you find," + 
            "Careful with fire,Respect Wildlife,Be kind to others";

    public string Splitter {get; set;} = ",";
    public string[] PhraseSplit {get; set;}
    public (string, int) LastPhraseRemoved {get; set;}
}
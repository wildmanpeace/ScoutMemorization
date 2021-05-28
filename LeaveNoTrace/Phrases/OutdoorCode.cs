public class OutdoorCode : IPhrase
{
    public string Phrase {get; set;} = "As an America,I will do my best to,Be clean in my," +
                        "outdoor manner,Be careful,with fire,Be considerate,in the outdoors and,Be conservation,minded";
    
    public string Splitter {get; set;} = ",";
    public string[] PhraseSplit {get; set;}
    public (string, int) LastPhraseRemoved {get; set;}
}
using System;
using System.Linq;

public interface IPhrase
{
    string Phrase {get; set;}
    string Splitter {get; set;}
    string[] PhraseSplit {get; set;}
    (string, int) LastPhraseRemoved {get; set;}
    string[] Split()
    {
        PhraseSplit = Phrase.Split(Splitter);
        return PhraseSplit;
    }

    void PrintPhraseSplit()
    {
        foreach (var phrase in PhraseSplit)
        {
            Console.WriteLine(phrase + "\n");
        }
    }

    void RemoveLine()
    {
        Random rnd = new();

        int phraseLength = PhraseSplit.Length;
        int pIndex = rnd.Next(phraseLength);

        int counter = 0;
        while (PhraseSplit[pIndex] == "|")
        {
            counter ++;
            if (counter == phraseLength)
            {
                break;
            }
            pIndex = rnd.Next(phraseLength);
        }
        LastPhraseRemoved = (PhraseSplit[pIndex], pIndex);
        PhraseSplit[pIndex] = "|";
    }

    bool HasAllLinesBeenRemoved()
    {
        var removedCount = PhraseSplit.Count(p => p == "|");

        if(PhraseSplit.Length == removedCount)
        {
            return true;
        }
        return false;
    }

    void Undo()
    {
        PhraseSplit[LastPhraseRemoved.Item2] = LastPhraseRemoved.Item1;
    }
}
using System;
using System.Collections.Generic;
using System.Linq;

namespace LeaveNoTrace
{
    class Program
    {
        static void Main(string[] args)
        {
            IPhrase selectedPhrase = args[0] switch
            {
                "o" => new OutdoorCode(),
                "l" => new LeaveTrace(),
                _ => throw new ArgumentException("o and l are the only available options")
            };
            selectedPhrase.Split();
            selectedPhrase.PrintPhraseSplit();
            bool run = true;
            while (run)
            {
                var listToRemove = Console.ReadLine();
                switch (listToRemove)
                {
                    case "r":
                        selectedPhrase.RemoveLine();
                        selectedPhrase.PrintPhraseSplit();
                        break;
                    case "u":
                        selectedPhrase.Undo();
                        selectedPhrase.PrintPhraseSplit();
                        break;
                    case "q":
                        run = false;
                        break;
                    default:
                        break;
                }

                if (selectedPhrase.HasAllLinesBeenRemoved()){
                    run = false;
                    break;
                }
            }
        }
    }
}
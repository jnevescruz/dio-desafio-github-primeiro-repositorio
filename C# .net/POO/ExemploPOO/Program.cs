using System;
using ExemploPOO.Models;

namespace ExemploPOO
{
    class Program
    {
        static void Main(string[] args)
        { 
            Aluno p1 = new Aluno();

            p1.Nome = "Bob";
            p1.Idade = 20;

            p1.Apresentar();




              //Valores validos
        //     Retangulo r = new Retangulo();
        //     r.DefinirMedidas(30, 30);
        //     r.ObterArea();

        //     System.Console.WriteLine($"Area: {r.ObterArea()}");
           
        //     //Valores invalidos
        //     Retangulo r2 = new Retangulo();
        //     r2.DefinirMedidas(0, 0);
        //     r2.ObterArea();

        //     System.Console.WriteLine($"Area: {r2.ObterArea()}");





           // Pessoa p1 = new Pessoa();

            //p1.Nome = "Bob";
            //p1.Idade = 20;

            //p1.Apresentar();
        }
    }
}

import java.util.Scanner;

public class okay {
    public static void main(String[] args) {
        System.out.println("Sum Of Two Number");
        int sum = 5 + 5;
        System.out.println("5 + 5 =" + sum);

        //End Of First Program

        int num1;
        int num2;
        
        //Sum of two numbers from input

        Scanner cons = new Scanner(System.in);

        System.out.println("Suming Inputs");
        System.out.println("Enter First Number 1: ");
        num1 = cons.nextInt();
        System.out.println("Enter Second Number 1: ");
        num2 = cons.nextInt();

        sum = num1 + num2;
        System.out.println(sum);

        String name;
        int age;
        char gender;
        double salary;

        Scanner scan = new Scanner(System.in);

        System.out.println("Enter Name: ");
        name = scan.nextLine();

        System.out.println("Enter Age: ");
        age = scan.nextInt();

        System.out.println("Enter Gender: ");
        gender = scan.next().charAt(0);

        System.out.println("Enter Salary: ");
        salary = scan.nextDouble();

        System.out.println("Name: " + name + " " + "Age: "+ age + " " + "Gender: " + gender +" " + "Salary: " + salary);



    }
}
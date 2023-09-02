import java.util.Scanner;
public class Quiz2 {
    public static void main (String[] args) {
        Scanner lector = new Scanner(System.in);
        System.out.println("Ingresa el mensaje cifrado");
        String mensajeCifrado = lector.next();
        System.out.println("Cuantas veces se movio la letra");
        int veces = lector.nextInt();

        String mensajeDecifrado = "";

        for(int i = 0; i < mensajeCifrado.length(); i++) {
            char letra = mensajeCifrado.charAt(i);
            boolean minuscula = (letra >= 'a' && letra <='z');
            boolean mayuscula = (letra >= 'A' && letra <='Z');
            if(!(minuscula || mayuscula))
                mensajeDecifrado += letra;
            else {
                int ascii = (int)letra;
                int baseAscii = (int)'a';
                if(mayuscula)
                    baseAscii = (int)'A';
                int nuevoAscii = (ascii - baseAscii - veces) % 26 + baseAscii;
                char nuevaLetra = (char)nuevoAscii;
                mensajeDecifrado += nuevaLetra;
            }
        }
        System.out.println("Mensaje decifrado: " + mensajeDecifrado);
    }
}
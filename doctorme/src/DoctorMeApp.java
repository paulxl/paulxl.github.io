import java.util.Scanner;

import java.io.File;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;

public class DoctorMeApp {


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Blah blah, tell the user some stuff");
        System.out.println("Player what is your name");
        String playerName = sc.next();
        System.out.println("players name is: "+playerName);

        try{
            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
            DocumentBuilder db = dbf.newDocumentBuilder();
            File inputFile = new File("./resources/test.xml");
            Document doc = db.parse(inputFile);
            doc.getDocumentElement().normalize();
            System.out.println("Root Element:  "+ doc.getDocumentElement().getNodeName());
            NodeList nodeList = doc.getElementsByTagName("disease");
            for(int i = 0; i < nodeList.getLength(); i++){
                Node node = nodeList.item(i);
                System.out.println("\nNode Name :" + node.getNodeName());
                if (node.getNodeType() == Node.ELEMENT_NODE)
                {
                    Element eElement = (Element) node;
                    System.out.println("Name: "+ eElement.getElementsByTagName("name").item(0).getTextContent());
                    System.out.println("Position: "+ eElement.getElementsByTagName("question").item(0).getTextContent());
                    System.out.println("ID: "+ eElement.getElementsByTagName("point").item(0).getTextContent());

                }
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
}

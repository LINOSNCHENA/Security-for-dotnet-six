
// Java Program to Illustrate Mobile Class

// Class
public class Mobile {

	// Main driver method
	public static void main(String[] args)
	{

		// Creating instance of Sim interface
		// inside main() method
		// with reference to Zamtel class constructor
		// invocation
		Sim sim = new Zamtel();

		// Sim sim = new Airtel();

		sim.calling();
		sim.data();
	}
}


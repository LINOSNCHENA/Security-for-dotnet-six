// Java Program to Illustrate Zamtel Class

// Class
// Implementing Sim interface
public class Zamtel implements Sim {
	@Override
	public void calling() {
		System.out.println("Zamtel Calling");
	}

	@Override
	public void data() {
		System.out.println("Zamtel Data");
	}
}

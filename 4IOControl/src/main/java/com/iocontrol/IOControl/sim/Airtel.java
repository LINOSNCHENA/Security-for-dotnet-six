package com.iocontrol.IOControl.sim;

public class Airtel implements Sim{
    @Override public void calling()
    {  System.out.println("================================11============");
        System.out.println("Airtel Calling");
    }
 
    @Override public void data()
    {
        System.out.println("Airtel Data");
    }
    
}

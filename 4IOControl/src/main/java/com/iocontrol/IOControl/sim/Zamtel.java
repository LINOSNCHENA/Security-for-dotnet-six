package com.iocontrol.IOControl.sim;

public class Zamtel implements Sim{
    @Override
    public void calling() {
        System.out.println("============================22================");
        System.out.println("Zamtel Calling");
    }
 
    @Override
    public void data() {
        System.out.println("Zamtel Data");
    }
    
}

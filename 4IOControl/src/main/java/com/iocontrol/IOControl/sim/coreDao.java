package com.iocontrol.IOControl.sim;

public class coreDao {
    public String name;
  
    public String getName() {
      return name;
    }
    public void setName(String name) {
      this.name = name;
    }
    
    public void add() {
    System.out.println("adding data through hibernate");
    }

}

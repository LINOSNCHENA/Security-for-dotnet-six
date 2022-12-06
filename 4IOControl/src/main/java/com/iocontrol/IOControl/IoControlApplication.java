package com.iocontrol.IOControl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.iocontrol.IOControl.sim.Sim;
import com.iocontrol.IOControl.sim.Zamtel;
import com.iocontrol.IOControl.sim.Airtel;
import com.iocontrol.IOControl.sim.Mtn;

@SpringBootApplication
public class IoControlApplication {

  public static void main(String[] args) {
    SpringApplication.run(IoControlApplication.class, args);

    // invocation
    Sim sim = new Zamtel();
    Sim sim2 = new Airtel();
    Sim sim3 = new Mtn();

    ApplicationContext applicationContext = new ClassPathXmlApplicationContext("beans.xml");
    Sim sim4 = applicationContext.getBean("sim4", Sim.class); // Extra


    sim.calling();
    sim.data();

    sim2.calling();
    sim2.data();

    sim3.calling();
    sim3.data();

    sim4.calling();
    sim4.data();
  }

}

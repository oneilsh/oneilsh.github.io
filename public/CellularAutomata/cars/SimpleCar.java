import java.awt.*;
import java.awt.event.*;

public class SimpleCar extends Obj
	{
	//public int x, y;
	//public double dir;
	//public Color LightColor;
	public int debug;
	public Sensor leftSensor, rightSensor;
	public double size = .6;


	public SimpleCar(int thex, int they)
		{
		super(thex, they);
		LightColor = Color.green;
		desc = "Green car which is attracted to Blue objects.";
		Color[] colors = {Color.blue};
		leftSensor = new Sensor(-12.5, 45, 350*size, colors);
		rightSensor = new Sensor(12.5, 45, 350*size, colors);
		leftSensor.updateXYDir(x, y, dir);
		rightSensor.updateXYDir(x, y, dir);
		}

	public void go(Obj array[], int count, int i)
		{
		boolean leftsensor = false;
		boolean rightsensor = false;
		for(int j = 0; j < count; j++)
			{
			if(j != i)
				{
				if(leftSensor.test(array[j]))leftsensor = true;
				if(rightSensor.test(array[j]))rightsensor = true;
				}
			}

		

		if(leftsensor && !rightsensor)
			super.turn(-5);
		else if(!leftsensor && rightsensor)
			super.turn(5);
		else if(leftsensor && rightsensor)
			super.moveforward(3*size);
		else if(!leftsensor && !rightsensor)
			{
			//double rand = Math.random();
			//if(rand < .1)
			//	super.turn(8);
			//else if(rand >.7)
			//	super.turn(-8);
			//else
				super.moveforward(3*size);
				super.turn(0.5);
			}
		leftSensor.updateXYDir(x, y, dir);
		rightSensor.updateXYDir(x, y, dir);
		}


	public void paint(Graphics g)
		{
		g.setColor(LightColor);
		g.fillOval((int)x, (int)y, 7, 7);
		g.setColor(new Color(200, 200, 200));
		g.fillOval((int)x, (int)y, 5, 5);
		g.setColor(Color.black);

		double rad = dir*Math.PI/180;
		//System.out.println("rads: "+rad+" cos(rads) = "+Math.cos(rad));
		g.drawLine((int)(x+3), (int)(y+3), (int)(x+20*Math.cos(rad)*size+3), (int)(y-20*Math.sin(rad)*size+3));
		if(senseview)
			{
			leftSensor.paint(g, Color.yellow);
			rightSensor.paint(g, Color.orange);
			}
		}


	}

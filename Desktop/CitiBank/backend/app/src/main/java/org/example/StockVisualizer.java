package org.example;

//exextor imports
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

// javafx Imports
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.chart.LineChart;
import javafx.scene.chart.NumberAxis;
import javafx.scene.chart.XYChart;
import javafx.stage.Stage;
import org.example.FinHub;
import javafx.application.Platform;

// io exception import
import java.io.IOException;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

// time imports
import java.time.LocalDateTime; 
import java.time.format.DateTimeFormatter;

// queue and linked list imports
import java.util.Queue;
import java.util.LinkedList;

 
 
public class StockVisualizer extends Application {
    ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
 
    @Override public void start(Stage stage) throws IOException, InterruptedException {
        // this takes the ticker from arguments
        String ticker = getParameters().getRaw().get(0);

        // this is my stock prices queue that they are taking
        Queue<String> stockPrices = new LinkedList<>();


        // title of the chart
        stage.setTitle(ticker);

        // making the axis names
        final NumberAxis xAxis = new NumberAxis();
        final NumberAxis yAxis = new NumberAxis();
        xAxis.setLabel("Time");
        yAxis.setLabel("Price");

        // chart creation
        final LineChart<Number,Number> lineChart = 
                new LineChart<Number,Number>(xAxis,yAxis);
        // setting line chart title        
        lineChart.setTitle("Stock Monitoring for " + ticker);

        //defining a series to display our data
        XYChart.Series series = new XYChart.Series();
        series.setName(ticker);

        //creating a 800 by 600 scene
        Scene scene  = new Scene(lineChart,800,600);
        lineChart.getData().add(series);
       
        stage.setScene(scene);
        stage.show();


        /* 
        i learned a new thing that javafx does not make api calls on the main thread
        the ux will break so i imported a new thread to execute the api calls and update the ui
         */

        Runnable task = () -> {
            try {
                String initialStockInfo = FinHub.fetchStockInfo(ticker);   // background thread
                double price = Double.parseDouble(initialStockInfo);
                long time = System.currentTimeMillis();
                
                Platform.runLater(() -> {
                    series.getData().add(
                        new XYChart.Data<>(time, price)
                    );
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
        };
        
        // i will poll the api call every 5 seconds
        scheduler.scheduleAtFixedRate(task, 0, 5, TimeUnit.SECONDS);
    
    }
 

    public static void main(String[] args) {
        launch(args);
    }
}
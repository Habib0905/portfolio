package com.portfolio.SpringEmail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class SpringEmailApplication {

	@Autowired
	private EmailSenderService senderService;
	public static void main(String[] args) {
		SpringApplication.run(SpringEmailApplication.class, args);
	}

//	@EventListener(ApplicationReadyEvent.class)
//	public void sendMail() {
//		senderService.sendEmail(
//				"Alexander The Great",
//				"habib.hussain@northsouth.edu",
//				"This is Subject",
//				"This is Body of Email");
//	}
}

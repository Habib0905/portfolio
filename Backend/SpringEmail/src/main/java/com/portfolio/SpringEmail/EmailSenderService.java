package com.portfolio.SpringEmail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {

    private JavaMailSender mailSender;

    @Autowired
    public EmailSenderService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(String userName, String userEmail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo("habib.hussain@northsouth.edu");
        message.setSubject(subject);
        message.setText("Name: "+ userName + "\n\n" + "Email: "+ userEmail + "\n\n" + body);

        mailSender.send(message);
    }

}

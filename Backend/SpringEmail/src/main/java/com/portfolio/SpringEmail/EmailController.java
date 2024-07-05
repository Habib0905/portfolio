package com.portfolio.SpringEmail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/contact")
public class EmailController {

    public EmailSenderService emailSenderService;

    @Autowired
    public EmailController(EmailSenderService emailSenderService) {
        this.emailSenderService = emailSenderService;
    }
    @PostMapping
    public void sendEmail(@RequestParam String userName, @RequestParam String userEmail, @RequestParam String subject, @RequestParam String body) {
        emailSenderService.sendEmail(userName, userEmail, subject, body);
    }
}

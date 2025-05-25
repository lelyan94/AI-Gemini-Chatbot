package com.ai.gemini_chat;
import java.util.Map;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/qna")
@AllArgsConstructor
@RestController

public class AIcontroller {


    private final QnAService qnAService;

    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String , String> payload) {
        String question = payload.get("question");
        String answer = qnAService.getAnswer(question);
        return ResponseEntity.ok(answer);
    }


}

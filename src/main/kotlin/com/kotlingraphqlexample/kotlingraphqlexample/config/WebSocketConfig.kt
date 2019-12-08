package com.kotlingraphqlexample.kotlingraphqlexample.config

import com.kotlingraphqlexample.kotlingraphqlexample.SocketHandler.SubscriptionWebSocketHandler
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.WebSocketHandler
import org.springframework.web.socket.config.annotation.*;
import org.springframework.web.socket.handler.PerConnectionWebSocketHandler

@Configuration
@EnableWebSocketMessageBroker
class WebSocketConfig: WebSocketMessageBrokerConfigurer {

  @Override
  override fun registerStompEndpoints(registry: StompEndpointRegistry) {
    registry.addEndpoint("/subscriptions").withSockJS();
  }

  @Override
  override fun configureMessageBroker(registry: MessageBrokerRegistry) {
    registry.setApplicationDestinationPrefixes("/app");
    registry.enableSimpleBroker("/topic");
  }

  @Bean
  fun webSocketHandler(): WebSocketHandler = PerConnectionWebSocketHandler(SubscriptionWebSocketHandler::class.java)
}
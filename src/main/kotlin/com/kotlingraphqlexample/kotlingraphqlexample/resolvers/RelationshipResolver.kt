package com.kotlingraphqlexample.kotlingraphqlexample.resolvers

import com.coxautodev.graphql.tools.GraphQLResolver
import com.kotlingraphqlexample.kotlingraphqlexample.dao.PersonDao
import com.kotlingraphqlexample.kotlingraphqlexample.model.Relationship
import org.springframework.stereotype.Component

@Component
class RelationshipResolver(private val personDao: PersonDao): GraphQLResolver<Relationship> {
    fun getFrom(relationship: Relationship) = personDao.getPersonById(relationship.from)
    fun getTo(relationship: Relationship) = personDao.getPersonById(relationship.to)
}
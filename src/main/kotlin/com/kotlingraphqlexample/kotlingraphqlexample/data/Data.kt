package com.kotlingraphqlexample.kotlingraphqlexample.data

import com.kotlingraphqlexample.kotlingraphqlexample.model.Hero
import com.kotlingraphqlexample.kotlingraphqlexample.model.Royalty
import com.kotlingraphqlexample.kotlingraphqlexample.model.Title
import java.util.UUID

fun generateUniqueId(): String {
  return UUID.randomUUID().toString()
}

val DATA: MutableList<Royalty> = mutableListOf(
    Royalty(id = generateUniqueId(), name = "Queen Elizabeth", image = "image", title = Title.QUEEN),
    Royalty(id = generateUniqueId(), name = "King Elizabeth", image = "image", title = Title.KING),
    Royalty(id = generateUniqueId(), name = "Prince Harry", image = "image", title = Title.PRINCE),
    Royalty(id = generateUniqueId(), name = "Princess Joseph", image = "image", title = Title.PRINCESS)
)

val ROYALTIES: MutableList<Royalty> = mutableListOf(
    Royalty(id = generateUniqueId(), name = "Queen Elizabeth", image = "image", title = Title.QUEEN),
    Royalty(id = generateUniqueId(), name = "King Elizabeth", image = "image", title = Title.KING),
    Royalty(id = generateUniqueId(), name = "Prince Harry", image = "image", title = Title.PRINCE),
    Royalty(id = generateUniqueId(), name = "Princess Joseph", image = "image", title = Title.PRINCESS)
)

val HEROES: MutableList<Hero> = mutableListOf(
    Hero(id = generateUniqueId(), name = "Storm", image = "image", ability = "Weather Control"),
    Hero(id = generateUniqueId(), name = "Wolverine", image = "image", ability = "Regeneration"),
    Hero(id = generateUniqueId(), name = "Phoenix", image = "image", ability = "Telepathy"),
    Hero(id = generateUniqueId(), name = "Magneto", image = "image", ability = "Metal")
)
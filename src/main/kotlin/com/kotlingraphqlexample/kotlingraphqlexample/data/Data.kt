package com.kotlingraphqlexample.kotlingraphqlexample.data

import com.kotlingraphqlexample.kotlingraphqlexample.model.Hero
import com.kotlingraphqlexample.kotlingraphqlexample.model.Royalty
import com.kotlingraphqlexample.kotlingraphqlexample.model.TITLE
import java.util.UUID

fun generateUniqueId(): String {
  return UUID.randomUUID().toString()
}

val data: MutableList<Royalty> = mutableListOf(
    Royalty(id = generateUniqueId(), name = "Queen Elizabeth", image = "image", title = TITLE.QUEEN),
    Royalty(id = generateUniqueId(), name = "King Elizabeth", image = "image", title = TITLE.KING),
    Royalty(id = generateUniqueId(), name = "Prince Harry", image = "image", title = TITLE.PRINCE),
    Royalty(id = generateUniqueId(), name = "Princess Joseph", image = "image", title = TITLE.PRINCESS)
)

val royalties: MutableList<Royalty> = mutableListOf(
    Royalty(id = generateUniqueId(), name = "Queen Elizabeth", image = "image", title = TITLE.QUEEN),
    Royalty(id = generateUniqueId(), name = "King Elizabeth", image = "image", title = TITLE.KING),
    Royalty(id = generateUniqueId(), name = "Prince Harry", image = "image", title = TITLE.PRINCE),
    Royalty(id = generateUniqueId(), name = "Princess Joseph", image = "image", title = TITLE.PRINCESS)
)

val heroes: MutableList<Hero> = mutableListOf(
    Hero(id = generateUniqueId(), name = "Storm", image = "image", ability = "Weather Control"),
    Hero(id = generateUniqueId(), name = "Wolverine", image = "image", ability = "Regeneration"),
    Hero(id = generateUniqueId(), name = "Phoenix", image = "image", ability = "Telepathy"),
    Hero(id = generateUniqueId(), name = "Magneto", image = "image", ability = "Metal")
)
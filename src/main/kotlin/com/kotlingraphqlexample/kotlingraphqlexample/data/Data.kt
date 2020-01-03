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
    Hero(id = generateUniqueId(), name = "Storm", image = "https://am23.akamaized.net/tms/cnt/uploads/2019/10/Storm-Xmen-can-we-get-her-color-right.jpg", ability = "Weather Control"),
    Hero(id = generateUniqueId(), name = "Wolverine", image = "https://img1.looper.com/img/gallery/x-men-wont-join-the-mcu-for-a-very-long-time-says-kevin-feige/intro-1554831333.jpg", ability = "Regeneration"),
    Hero(id = generateUniqueId(), name = "Phoenix", image = "https://static0.srcdn.com/wordpress/wp-content/uploads/2017/08/Dark-Phoenix-defeated-Wolverine.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5", ability = "Telepathy"),
    Hero(id = generateUniqueId(), name = "Magneto", image = "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Marvel-bombshell-Will-Denzel-Washington-play-Magneto-in-new-X-Men-2068143.webp?r=1568983260991", ability = "Metal")
)
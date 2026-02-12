---
title:
description:
date: 2025-01-25T02:49:00
tags:
draft: false
---
```tabs {alignment: "bottom", indexed: false}
--- Original
![](https://i.ibb.co/dsshQCtJ/THE-FINALS-ISEUL-T-wallpaper.png)

--- Annotated (default)
![](https://i.ibb.co/TM99bD09/THE-FINALS-ISEUL-T-wallpaper-annotated.png)
```
# Metadata

>[!info]- Text Layer Name
>
> ```
> 000B - Attempt to reuse active OIRequest (x6)
> From embar(%€€%
> ```
>
> > [!faq]- What is 000B?
> > 
> > **000B** is an [Amiga Alert Code](https://forum.amiga.org/index.php?topic=66297.0) that is triggered when a program tries to send a second I/O request using a memory block that the system still considers "active" from a previous, unfinished task.

>[!info]- Text Layer Text
>
> ```
> ......________________..___.____________..________________.
> ...//[CNS]           //    /           //                /
> ..//                //    /           //           _____/
> ./           _ ____/                 /____ _          /
> .\______________/  \___//___________/ \______________/
> ..............:....a.c.c.e.p.t..n.o..l.i.e.s....:...
> 
> PERMSSN    UID GID     PACKED  SIZE    RATIO  CRC        STAMP        NAME
> ---------- ----------- ------- ------- ------ ---------- ------------ -------------
> [generic]              1911    3836    49.8%  -lhX- 0d2G MAR 17 2076  Vpatch_MDOSVAIiYA_?txt
> [generic]              218     341     63.9%  -lhX- 0d2G MAR 17 2076  Vpatch_MDOSVAIiYA_?txt
> ---------- ----------- ------- ------- ------ ---------- ------------ -------------
> Total 2 files          2129    4177    51.0%             JAN 25 2025
> ```
> 
> > [!faq]- What is lhX?
> > 
> > **lhX** is a compression method within the  [LHA file format](https://en.wikipedia.org/wiki/LHA_(file_format)), the standard for archiving files on [Amiga](https://en.wikipedia.org/wiki/Amiga) computers. Unlike standard methods, -lhx- utilizes an extended dictionary, allowing it to achieve much higher compression ratios for larger files.

# Clues

> [!info] Clues listed below in italics are based on deciphered clues

The clues from this official artwork share some common themes:
  - **Asia** (*Hexadecimal*, *Silk Road*, Herodotus, Sven Hedin’s Signature)
  - **Silk Road** (Silk Fibroin, Herodotus, Sven Hedin’s Signature)
  - **Connecting 2 sides** (*Silk Road*, Gruk)
  - **Hexadecimal** (Ann Bet Chris, Gruk)

````tabs {numbered: true}
--- 1) fcbytaehrcr
> [!unsolved]

![[Steps_fcbytaehrcr.png]]

## Description
The bottom right of the artwork has faint lines. By adjusting the levels of the image, rows with eight columns of solid and empty cells are revealed. You can convert them to binary. From there you can convert them to text.

At the moment, we don't know what these characters are supposed to lead to.

## [Steps](https://gchq.github.io/CyberChef/#recipe=From_Binary('Space',8)&input=MDExMDAxMTAgMDExMDAwMTEgMDExMDAwMTAgMDExMTEwMDEgMDExMTAxMDAgMDExMDAwMDEgMDExMDAxMDEgMDExMDEwMDAgMDExMTAwMTAgMDExMDAwMTEgMDExMTAwMTA&ieol=CRLF&oeol=CRLF)

1. Convert the rows to binary:
   ```
   01100110
   01100011
   01100010
   01111001
   01110100
   01100001
   01100101
   01101000
   01110010
   01100011
   01110010
   ```
   
2. Convert the Binary to ASCII:
   ```
   fcbytaehrcr
   ```

--- 2) Herodotus
> [!deciphered]

![[Steps_Herodotus.png]]

## Description
[Herodotus](https://en.wikipedia.org/wiki/Herodotus), a Greek historian and geographer, has his name underneath the hat of the contestant in the artwork.

He has been described as "The Father of History" and he can be traced back to [the first recorded uses of steganography](https://en.wikipedia.org/wiki/Steganography#History).

Herodotus documented the [Royal Road's](https://en.wikipedia.org/wiki/Royal_Road) system of secure stations and organized travel, which provided the logistical blueprint for the [Silk Road](https://en.wikipedia.org/wiki/Silk_Road) to eventually **connect the East and the West**.

The name **Asia** comes from the Ancient Greek word Ἀσία. It was first used as a name for the entire continent by **Herodotus** in his book [Histories](https://en.wikipedia.org/wiki/Histories_(Herodotus)).

> [!eyed] https://discord.com/channels/1008696016318513243/1332648610311049287/1332725951632642160
> **@tomschmo:** I think I might have it... HERO(DOT)US [https://en.wikipedia.org/wiki/Herodotus](https://en.wikipedia.org/wiki/Herodotus)

## [Steps](https://gchq.github.io/CyberChef/#recipe=Find_/_Replace(%7B'option':'Simple%20string','string':'.'%7D,'DOT',true,false,true,false)&input=SEVSTy5VUw&ieol=CRLF&oeol=CRLF)
1. Write out the text:
   ```
   HERO.US
   ```
   
2. Substitute the dot with its text form:
   ```
   HERODOTUS
   ```
   
--- 3) Gruk
> [!deciphered]

![[Steps_Gruk.png]]

## Description
There are bars in the top left of the artwork as well as dots in all four corners of the artwork. Both of them lead to `7 18 21 11` for `GRUK` in A1Z26. In other words, two clues **connect** to Gruk and the dots in all four corners **connect** together to form one of said clues.

Gruk is Danish for [Grook](https://en.wikipedia.org/wiki/Grook), which is a a form of short aphoristic poem or rhyming aphorism created by [Piet Hein](https://en.wikipedia.org/wiki/Piet_Hein_(scientist)).

Piet Hein also invented the board game [Hex](https://en.wikipedia.org/wiki/Hex_(board_game)), which is a game where two players attempt to **connect opposite sides**.

> [!eyed] https://discord.com/channels/1008696016318513243/1332648610311049287/1333229476150247455
> **@rockhoundblack:** Another connection pointing to this: the clue "GRUK" points to Piet Hein and he invented the game "Hex" [https://en.wikipedia.org/wiki/Hex_(board_game)](https://en.wikipedia.org/wiki/Hex_(board_game))

## [Steps](https://gchq.github.io/CyberChef/#recipe=A1Z26_Cipher_Decode('Space')&input=NyAxOCAyMSAxMQ&ieol=CRLF&oeol=CRLF)

1. Count the height of each bar **or** count the distance of each dot from the top of its bar:
   ```
   7 18 21 11
   ```
   
2. Convert the numbers to text using A1Z26:
   ```
   GRUK
   ```
   
--- 4) Silk Fibroin
> [!deciphered]

![[Steps_Filk_Fibroin.png]]

## Description
At the corners of a few pieces from ISEUL-T's logo are numbers. The top row can be converted to letters using a phone keypad to form `C15H23N5O6`, which is the approximated structural formula for silk fibroin.

[Fibroin](https://en.wikipedia.org/wiki/Fibroin) is known to arrange itself in three structures, called **silk I, II, and III**.

It's possible that silk fibroin is another connection to the [Silk Road](https://en.wikipedia.org/wiki/Silk_Road).

> [!eyed] https://discord.com/channels/1008696016318513243/1332648610311049287/1333270793819521034
> **@fishxw:** that is Silk Fibroin I think, C15H23N5O6

## Steps
1. Write down the numbers:
   ```
   222 44 66 666
   15  23 5  6
   ```
   
2. Convert the top row to text using Multi-tap Phone (SMS):
   ```
   C  H  N O
   15 23 5 6
   ```
   
3. Combine both lines by going top-to-bottom left-to-right:
   ```
   C15H23N5O6
   ```
   
4. You have the approximate structural [formula](https://www.researchgate.net/publication/290226458_Physical_characteristics_and_structure_of_Indian_silk_fibres) (C₁₅H₂₃N₅O₆) for [Silk Fibroin](https://en.wikipedia.org/wiki/Fibroin).

--- 5) Sven Hedin's Signature
> [!deciphered]

![[Steps_Sven_Hedin.png]]

## Description
At the top left of the I for ISEUL-T, an upside down signature for Sven Hedin can be revealed with a levels adjustment.

[Sven Hedin](https://en.wikipedia.org/wiki/Sven_Hedin) was a Swedish geographer, topographer, and expleror that led multiple expeditions along the old [Silk Road](https://en.wikipedia.org/wiki/Silk_Road) in **Asia**.

> [!eyed] https://discord.com/channels/1008696016318513243/1332648610311049287/1333272125364244552
> **@rockhoundblack:** [https://en.wikipedia.org/wiki/Sven_Hedin](https://en.wikipedia.org/wiki/Sven_Hedin) made multiple expeditions on the Silk Road

--- 6) 19244489 or 19244439
> [!unsolved]

![[Steps_19244489.png]]

## Description
The side of the Cerberus 12GA has the number `19244489` (or `19244439`).

At the moment, we do not confidently know where the number is supposed to lead.

--- 7) DIT-DAH-DIT
> [!deciphered]

![[Steps_DIT-DAH-DIT.png]]

## Description
The top right corner of the artwork has `DIT-DAH-DIT` which is revealed with the help of the VAIIYA artwork. The sequence is morse code for the letter R.

At the moment we aren't confident in where the letter R is supposed to lead.

## Steps
1. Invert the colors from the VAIIYA artwork:
   ![[Steps_DIT-DAH-DIT_01.png]]
   
2. Merge the VAIIYA artwork with the ISEUL-T artwork using a `Substract / Negation` blend mode:
   ![[Steps_DIT-DAH-DIT_02.png]]
   
3. Run some noise analysis on the artwork:
   ![[Steps_DIT-DAH-DIT_03.png]]
   
4. Write down the text as morse code:
   ```
   .-.
   ```
   
5. Convert the morse code to text:
   ```
   R
   ```

--- 8) ANN BET CHRIS
> [!deciphered]

![[Steps_ANN_BET_CHRIS.png]]

## Description
At the footer of the artwork, the bottom half of `ANN BET CHRIS` can be slightly seen. With a level adjustment, they can become more clear.

Ann Bet Chris is how ABC is [verbally represented in Hex](https://en.wikipedia.org/wiki/Hexadecimal#Verbal_representation) using the Magnuson naming method.

The hexadecimal aspect of this clue could be linked to Asia because of the following:

> [!quote] [Wikipedia](https://en.wikipedia.org/wiki/Hexadecimal#Cultural_history)
> 
> The traditional [Chinese units of measurement](https://en.wikipedia.org/wiki/Chinese_units_of_measurement "Chinese units of measurement") were base-16.

> [!eyed] https://discord.com/channels/1008696016318513243/1332648610311049287/1332809129135444159
> **@r.cade:** the bottom looks like ANN BET CHRIS

--- 9) 1 2 3
> [!deciphered]

![[Steps_ISEUL-T_123.png]]

## Description
The Cerberus 12GA has `1 2 3` on top of it, but this is not unique to the artwork. The in-game model for the shotgun has the same markings on top. This doesn't mean that it cannot be a clue.
`````

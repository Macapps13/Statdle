from nba_api.stats.static import players as p 
import random as rand
#Imports Neccessary Libraries

players = p.get_players()

numPlayers = len(players)

randomPlayer = players[rand.randint(1, numPlayers-1)]

print(randomPlayer['full_name'])
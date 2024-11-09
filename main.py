from nba_api.stats.static import players as p 
from nba_api.stats.endpoints import playercareerstats as pcs
import random as rand
#Imports Neccessary Libraries

players = p.get_active_players()

numPlayers = len(players)

randomPlayer = players[rand.randint(1, numPlayers-1)]

career = pcs.PlayerCareerStats(player_id=randomPlayer['id'])

print(randomPlayer['full_name'])
playerCareer = career.get_normalized_dict()
playerCareerPoints = playerCareer.CareerTotalsRegularSeason.get('PTS')

print(playerCareerPoints)
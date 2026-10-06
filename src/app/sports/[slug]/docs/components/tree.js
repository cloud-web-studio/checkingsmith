import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client';

export default function Tree() {
  const supabase = createClient()
  const [endlist, setendlist] = React.useState([])

  const Handlereq = async  () => {
    const {data: endpoints, error} = await supabase.from('endurl').select('*').order('created_at', { ascending: true })
    if (error) throw error;
    const making = [];
    const lookup = {};

    // Single loop to organize everything perfectly
    for (const val of endpoints) {
      // Ensure every item has its own child array initialized ahead of time
      val.child = [];

      if (val.parent_label) {
        // If the parent doesn't exist in our lookup map yet, create a placeholder for it
        if (!lookup[val.parent_label]) {
          lookup[val.parent_label] = { id:val.parent_label, label: val.parent_label, child: [] };
          making.push(lookup[val.parent_label]);
        }
        // Push the child straight into the referenced parent group safely
        lookup[val.parent_label].child.push(val);
      } else {
        // It's a root level item. Add it to lookup map and main list
        lookup[val.label] = val;
        making.push(val);
      }
    }
    setendlist(making)
    // console.log(making);
  }

  React.useEffect(() => {
    Handlereq()
  },[])
  const API_DATA = [
  { id: 'league-logo', label: 'Get League Logo', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/sport-logo' },
  { id: 'league-info', label: 'Get League Info', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/sport-detail' },
  {
    id: 'seasons',
    label: 'Seasons',
    children: [
      { id: 'seasons-all', label: 'Get Seasons All List', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/seasons-list' },
      { id: 'season-current', label: 'Get Season Current', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/current-season' },
      { id: 'season-detail', label: 'Get Season Detail', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/season-detail?year=2024' },
      { id: 'season-types', label: 'Get Season Types', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/season-types?year=2024' },
    ],
  },
  {
    id: 'weeks-calendar',
    label: 'Weeks Calendar',
    children: [
      { id: 'week-list', label: 'Get Week List', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/weekslist-by-year-seasontype?year=2024&seasontype=2' },
      { id: 'week-detail', label: 'Get Week Detail', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/weekdetail-by-week?week=11&year=2024&seasontype=2' },
    ],
  },
  {
    id: 'schedule',
    label: 'Schedule',
    children: [
      { id: 'schedule-list', label: 'Get Schedule List', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/schedule-by-week-seasontype-year?year=2024&seasontype=2&week=11' },
    ],
  },
  {
    id: 'livescores',
    label: 'Livescores',
    children: [
      { id: 'livescores-list', label: 'Get Livescores List', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/nfllivescore-by-gameid?gameid=401772982' },
    ],
  },
  {
    id: 'scoreboard',
    label: 'Scoreboard',
    children: [
      { id: 'scoreboard-params', label: 'Get Scoreboard by Year, Season & Week', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/scoreboard-by-week-seasontype-year?year=2024&seasontype=2&week=11' },
      { id: 'scoreboard-date', label: 'Get Scoreboard by Date', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/scoreboard-date?date=20251116' },
    ],
  },
  {
    id: 'odds',
    label: 'Odds',
    children: [
      { id: 'odds-game-list', label: 'Get Odds Game List', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/matchodds-list-by-id?gameid=401547401' },
      { id: 'odds-single-game', label: 'Get Odds Single Game', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/single-matchodds-by-id?gameid=401547401&oddid=31' },
      { id: 'odds-win-prob', label: 'Get Game Win Probabilities List', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/game-winprobabilities-list-by-gameid?gameid=401547401' },
      { id: 'odds-predictor', label: 'Get Game Predictor List', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/gamepredictor-list-by-gameid?gameid=401547401' },
    ],
  },
  {
    id: 'standings',
    label: 'Standings',
    children: [
      { id: 'standings-season', label: 'Get Standings by Season', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/nfl-standings-by-season?year=2024' },
      { id: 'standings-conference', label: 'Get Standings Conference by Season', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/nfl-standings-conference-by-season?year=2024' },
      { id: 'standings-division', label: 'Get Standings Division by Season', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/nfl-standings-division-by-season?year=2024' },
    ],
  },
  {
    id: 'teams',
    label: 'Teams',
    children: [
      { id: 'teams-list-season', label: 'Get Teams List by Season', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/teams-list-by-season?year=2024' },
      { id: 'team-detail', label: 'Get Team Detail', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/team-detail-by-team-season-id?year=2024&teamid=21' },
    ],
  },
  {
    id: 'athletes',
    label: 'Athlete/Roster/Squad',
    children: [
      { id: 'players-team-id', label: 'Get Players List by Team Id', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/players-list-by-teamid?teamid=21' },
      { id: 'players-detail', label: 'Get Players Detail', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/players-detail-by-playerid?year=2024&teamid=21&playerid=3929630' },
    ],
  },
  {
    id: 'games-events',
    label: 'Games/Events',
    children: [
      { id: 'games-week-year', label: 'Get Games List by Week & SeasonType & Year', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/games-by-week-seasontype-year?year=2024&seasontype=2&week=11' },
      { id: 'games-date', label: 'Get Games List by Date', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/games-by-date?date=20251116' },
      { id: 'game-info-id', label: 'Get Games Info by Game Id', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/gameinfo-by-id?gameid=401547401' },
      { id: 'game-score-id', label: 'Get Game Score by Game Id', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/gamescore-by-id?gameid=401547401' },
    ],
  },
  {
    id: 'statistics',
    label: 'Statistics',
    children: [
      { id: 'stats-team-id', label: 'Get Statistics Team by Team Id', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/teamstatistics-by-id?year=2024&teamid=21' },
      { id: 'stats-player-id', label: 'Get Statistics Player by Player Id', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/playersstatistics-by-id?year=2024&playerid=2576336' },
    ],
  },
  {
    id: 'news',
    label: 'News',
    children: [
      { id: 'news-nfl', label: 'Get News NFL', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/nfl-news-list' },
      { id: 'news-player', label: 'Get News Player', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/playernews-by-playerid?playerid=2576336' },
      { id: 'news-team', label: 'Get News Team', type: 'endpoint', url: 'http://localhost:8888/api/v1/nfl/teamnews-by-teamid?teamid=21' },
    ],
  }
];
  const router = useRouter()
  // Component to render labels dynamically
  const renderLabel = (item) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {!item.child.length && (
        <Typography variant="caption" sx={{ color: '#1976d2', fontWeight: 'bold', fontSize: '0.7rem' }}>
          GET
        </Typography>
      )}
      <Typography variant="body2" sx={{ color: item.parent_label ? '#e0e0e0' : '#ffffff', fontWeight: item.child.length ? 'bold' : 'normal' }}>
        {/* <Link style={{textDecoration:'none',color:'inherit'}} href={item.url}> */}
          {item.label}
        {/* </Link> */}
      </Typography> 
    </Box>
  );

  // Recursive function to loop through the array and print TreeItems
  const renderTree = (nodes) => (
    nodes.map((node) => (
      <TreeItem
        onClick={() => {
          if(!node.child.length){
            router.push('/sports/football-api/docs/'+node.url)
          }
        }}
        key={node.id} 
        itemId={node.id} 
        label={renderLabel(node)}
        sx={{mb: !node.parent_label ? 1 : 0, mt:node.parent_label ? 1:0}}
      >
        {/* If the node has children, loop again (recursion) */}
        {Array.isArray(node.child) ? renderTree(node.child) : null}
      </TreeItem>
    ))
  );

  return (
    <Box sx={{ height:'100%', bgcolor: '#1e1e1e', p: 2 }}>
      <SimpleTreeView>
        {renderTree(endlist)}
      </SimpleTreeView>
    </Box>
  );
}
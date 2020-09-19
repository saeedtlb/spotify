import React from 'react';

import { useStateValue } from '../../DataLayer';

import { get_song } from '../../../Actions/user';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DateRangeIcon from '@material-ui/icons/DateRange';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import AddIcon from '@material-ui/icons/Add';

const SongTable = ({ tracks }) => {
    const [{ playing }, dispatch] = useStateValue();

    const playSong = id => get_song(id).then(data => dispatch(data));

    const renderSongs = () =>
        tracks
            ? tracks.map((track, i) => (
                  <TableRow key={i}>
                      <TableCell align='center'>
                          <AddIcon />
                          {playing ? (
                              <PauseCircleOutlineIcon />
                          ) : (
                              <PlayCircleOutlineIcon
                                  onClick={() => playSong(track.id)}
                              />
                          )}
                      </TableCell>
                      <TableCell align='left'>{track.name}</TableCell>
                      <TableCell align='left'>
                          {track.artists.join(', ')}
                      </TableCell>
                      <TableCell align='left'>{track.added}</TableCell>
                  </TableRow>
              ))
            : null;
    return (
        <>
            {!tracks ? (
                <h1>loading...</h1>
            ) : (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    size='small'
                                    className='sizeSmall'
                                ></TableCell>
                                <TableCell align='left'>title</TableCell>
                                <TableCell align='left'>artists</TableCell>
                                <TableCell align='left'>
                                    <DateRangeIcon />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{renderSongs()}</TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    );
};

export default SongTable;

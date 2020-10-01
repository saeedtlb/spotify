import React from 'react';

import { useSongStateValue } from '../../DataLayer';

import { get_song } from '../../../Actions/song';

import Loading from '../../utils/Loading';

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
    const [{ playing }, dispatch] = useSongStateValue();

    // const playSong = id => get_song(id).then(data => dispatch(data));
    const playSong = id =>
        dispatch({
            type: 'GET_SONG',
            payload: {
                url: '',
                name: 'levis',
            },
        });

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
                <Loading />
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

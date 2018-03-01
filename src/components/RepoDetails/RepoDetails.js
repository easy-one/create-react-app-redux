import React from 'react';
import {connect} from 'react-redux';

const renderDetailsList = (repo) => {
  const detailsToShow = {
    'name': 'Name',
    'description': 'Description',
    'forks': 'Forks count',
    'open_issues': 'Open issues count',
    'watchers': 'Watchers count',
    'language': 'Language',
    'homepage': 'Homepage',
    'updated_at': 'Updated at'
    // desired details whitelist
  };

  return Object.entries(detailsToShow)      // transform hash table into key-value pairs
  .map(([detailKey, detailName]) => {
    const detailData = repo[detailKey];
    return (
      <tr key={detailKey}>
        <td>{detailName}</td>
        <td>{detailData}</td>
      </tr>
    )
  })
};

const RepoDetails = (props) => {
  return (
    <div className="pt-2 mt-5 mt-sm-0">
      <h3>{props.activeRepo.name} details</h3>
      <table className="table table-striped">
        <tbody>
          {renderDetailsList(props.activeRepo)}
        </tbody>
      </table>
    </div>
  )
};

const mapStateToProps = state => ({
  activeRepo: state.repos.activeRepo
});

export default connect(mapStateToProps)(RepoDetails);
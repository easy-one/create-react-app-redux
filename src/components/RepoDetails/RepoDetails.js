import React from 'react';

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
    // and so on
  };

  return Object.entries(detailsToShow)
  .map(([key, title]) => {
    const detailData = repo[key];
    return (
      <tr key={key}>
        <td>{title}</td>
        <td>{detailData}</td>
      </tr>
    )
  })
};

const RepoDetails = (props) => {
  return (
    <div className="pt-2 mt-5 mt-sm-0">
      <h3>{props.repo.name} details</h3>
      <table className="table table-striped">
        <tbody>
          {renderDetailsList(props.repo)}
        </tbody>
      </table>
    </div>
  )
};

export default RepoDetails;
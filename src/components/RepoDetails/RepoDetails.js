import React from 'react';


class RepoDetails extends React.Component {
  detailsToShow = {
    'name': 'Name',
    'description': 'Description',
    'forks': 'Forks count',
    'open_issues': 'Open issues count',
    'watchers': 'Watchers count',
    'language': 'Language'
  };

  renderDetails() {
    return Object.entries(this.detailsToShow).map(([key, title]) => {
      const detailData = this.props.repo[key];
      return (
        <tr key={key}>
          <td>{title}</td>
          <td>{detailData}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="pt-2 mt-5 mt-sm-0">
        <h3>{this.props.repo.name} details</h3>
        <table className="table table-striped">
          {this.renderDetails()}
        </table>
      </div>
    )
  }
}

export default RepoDetails;
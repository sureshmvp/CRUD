// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import WebOrderLevelActions from "../redux/actions/WebOrderLevelActions";

// END IMPORT ACTIONS

/** APIs

* actionsWebOrderLevel.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsWebOrderLevel.list
*	@description CRUD ACTION list
*

**/


class WebOrderLevelList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsWebOrderLevel.loadWebOrderLevelList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsWebOrderLevel.deleteWebOrderLevel(this.state.idDelete).then(data => {
      this.props.actionsWebOrderLevel.loadWebOrderLevelList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [
    ];
    const link = "/weborderlevels/";

    return (
      <div>
        <h1>WebOrderLevel List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/weborderlevels/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/weborderlevels/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsWebOrderLevel: bindActionCreators(WebOrderLevelActions, dispatch),
  };
};

// Validate types
WebOrderLevelList.propTypes = { 
  actionsWebOrderLevel: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.WebOrderLevelListReducer.listWebOrderLevel
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebOrderLevelList);

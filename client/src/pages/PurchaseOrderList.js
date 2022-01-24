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
import PurchaseOrderActions from "../redux/actions/PurchaseOrderActions";

// END IMPORT ACTIONS

/** APIs

* actionsPurchaseOrder.list
*	@description CRUD ACTION list
*	@returns ARRAY OF PurchaseOrder
*
* actionsPurchaseOrder.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id PurchaseOrder
*
* actionsPurchaseOrder.findByPoNumber
*	@description CRUD ACTION findByPoNumber
*	@param Objectid key - Id of the resource PoNumber to search
*

**/


class PurchaseOrderList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsPurchaseOrder.loadPurchaseOrderList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsPurchaseOrder.deletePurchaseOrder(this.state.idDelete).then(data => {
      this.props.actionsPurchaseOrder.loadPurchaseOrderList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "PoNumber",
        type: "string",
        label: "PoNumber"
      },
    ];
    const link = "/purchaseorders/";

    return (
      <div>
        <h1>PurchaseOrder List</h1>

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
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">PoNumber</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/purchaseorders/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Name }</TableCell>
                <TableCell align="right">{ row.PoNumber }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/purchaseorders/new">
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
    actionsPurchaseOrder: bindActionCreators(PurchaseOrderActions, dispatch),
  };
};

// Validate types
PurchaseOrderList.propTypes = { 
  actionsPurchaseOrder: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.PurchaseOrderListReducer.listPurchaseOrder
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseOrderList);

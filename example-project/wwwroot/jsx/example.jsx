class ExampleComponent extends React.Component {
    render() {
        return (
            <div>
                <ListComponent />
                <FormComponent />
            </div>
        );
    }
}

class ListComponent extends React.Component {
    render() {
        return (
            <div>Options will list this area</div>
        );
    }
}

class FormComponent extends React.Component {
    render() {
        return (
            <div>This area for the forms</div>
        );
    }
}

ReactDOM.render(<ExampleComponent />, document.getElementById('react-example'));


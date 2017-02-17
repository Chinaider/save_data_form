# Plugin Save Data Form

## Introduction

Saves form field data in LocalStorange and automatically fills in the form with this saved data.

This plugin depends on JQuery.

## Installation using NPM

```bash
$ npm install save-data-form
```

## Installation and Utilization

In the HTML in your script stack insert (ignore JQuery if you have already installed it)

```
 <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
 <script type="text/javascript" src="./node_modules/dist/SaveDataForm.js"></script>
```

Set up a Json with the field name and type.

The accepted types are HTML fields such as:
 - input
 - select
 - textarea
 - radio
 - checkbox 

This plugin does not support multiple-select yet.

```
 <script type="text/javascript">
 		var config = {
 			fields: [
 				{name:'field1',type:'input'},
 				{name:'field2',type:'select'},
 				{name:'field3',type:'textarea'},
 				{name:'field4',type:'radio'},
 				{name:'field4',type:'checkbox'},
 			]
 		};

 		var form =  new SaveDataForm();
 		form.init(config);
 
 </script>
 ```

 ## Useful Methods


Catch all the data saved on the client.
This returns a Json.

```
form.getData();
```

Erase all data saved on the client.
```
form.clearDataForm();
<<<<<<< HEAD
<<<<<<< HEAD
```
=======
```
>>>>>>> 4eda750545474706ccbbfdb75566ddcbe5e1005f
=======
```
>>>>>>> 4eda750545474706ccbbfdb75566ddcbe5e1005f

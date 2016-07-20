var ngSchemaForm = {};
     ngSchemaForm.schema={
         type: "object",
            properties: {
              cbProp: {
                    cb: { title: "I am checkbox", type: "boolean", default: false }
                },
            }
        }

        ngSchemaForm.cbSection={
         type: "conditional",
            condition: "model.currentSection=='cbSection'",
            items: [
                {
                    type: "section",
                    htmlClass: "row",
                    items: [
                        {
                            type: "section",
                            htmlClass: "col-lg-12",
                            items: [{ key: "cbProp.cb" }]
                        }
                    ]
                }
          ]
        }

        ngSchemaForm.form={
         "type": "section",
          "htmlClass": "container",
          "items": [ ngSchemaForm.cbSection ]
        }

        var formApp = angular.module('formApp', ['schemaForm']);

        formApp.controller('FormController', function ($scope) {
            $scope.schema = ngSchemaForm.schema;
            $scope.form = ngSchemaForm.form;
            $scope.model = { currentSection: "cbSection" };
        });
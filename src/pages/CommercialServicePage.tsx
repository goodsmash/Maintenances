import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LeadForm } from '../components/LeadForm';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { 
  ChevronDown, 
  ChevronRight, 
  Clock, 
  DollarSign, 
  AlertTriangle,
  Clipboard,
  ThermometerSnowflake
} from "lucide-react";
import { commercialMaintenanceData } from '../data/commercialMaintenanceData';
import { severityColors } from '../data/maintenanceData';

export default function CommercialServicePage() {
  const { category } = useParams<{ category: string }>();
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const categoryData = category ? commercialMaintenanceData[category.toLowerCase()] : null;

  if (!categoryData) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        <p>Please select a valid commercial service category.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 capitalize">
          Commercial {category?.replace('commercial', '')} Services
        </h1>
        <p className="text-lg text-gray-600 mb-4">{categoryData.description}</p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clipboard className="h-4 w-4" />
          <span>Health & Safety Compliant</span>
          <ThermometerSnowflake className="h-4 w-4 ml-4" />
          <span>Temperature Monitored</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {categoryData.issues.map((issue) => (
          <Card key={issue.title} className="overflow-hidden">
            <div
              className="p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => setSelectedIssue(selectedIssue === issue.title ? null : issue.title)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-medium">{issue.title}</h3>
                  <span className={`px-2 py-1 rounded text-sm ${severityColors[issue.severity]}`}>
                    {issue.severity}
                  </span>
                </div>
                {selectedIssue === issue.title ? (
                  <ChevronDown className="h-5 w-5" />
                ) : (
                  <ChevronRight className="h-5 w-5" />
                )}
              </div>
            </div>

            {selectedIssue === issue.title && (
              <CardContent className="border-t bg-gray-50">
                <p className="mb-4 text-gray-700">{issue.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span>{issue.timeToFix}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-gray-500" />
                    <span>{issue.estimatedCost}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-gray-500" />
                    <span className="capitalize">{issue.severity} Priority</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {issue.symptoms.map((symptom) => (
                      <li key={symptom} className="text-gray-700">{symptom}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <Button
                    onClick={() => setShowLeadForm(true)}
                    className="flex-1"
                  >
                    Request Emergency Service
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowLeadForm(true)}
                    className="flex-1"
                  >
                    Schedule Maintenance
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Submit Service Request</h2>
              <button
                onClick={() => setShowLeadForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <LeadForm
                category={category || ''}
                service={selectedIssue || ''}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

// This data would typically come from your backend/database
const requirements = [
  {
    title: "Vaccination",
    details: "Your pet must be vaccinated against rabies at least 30 days before arrival in the Bahamas, but not more than 10 months prior for dogs and 12 months for cats."
  },
  {
    title: "Health Certificate",
    details: "A health certificate issued by a licensed veterinarian within 48 hours of arrival in the Bahamas is required."
  },
  {
    title: "Microchip",
    details: "All pets must be microchipped with an ISO 11784/11785 compliant 15-digit microchip."
  },
  {
    title: "Import Permit",
    details: "An import permit from the Bahamas Ministry of Agriculture and Marine Resources is required for all pets entering the Bahamas."
  },
  {
    title: "Age Restriction",
    details: "Puppies and kittens under 6 months of age are not permitted to enter the Bahamas."
  },
  {
    title: "Breed Restrictions",
    details: "Certain breeds are restricted from entry. Please check our Restricted Breeds page for more information."
  },
  {
    title: "Parasite Treatment",
    details: "Your pet must be treated for internal and external parasites within 48 hours of arrival in the Bahamas."
  },
  {
    title: "Identification",
    details: "Your pet should wear a collar with a name tag that includes your contact information."
  }
]

export function RequirementsList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {requirements.map((req, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              {req.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{req.details}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

